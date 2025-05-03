import { Client } from 'pg';
import services from '../data/services.json' with { type: "json" };
import forms from '../data/form.json' with { type: "json" };

const seedDatabase = async () => {
    // TODO: Replace with your PostgreSQL connection details
    const client = new Client({
        user: '',
        host: '',
        database: '',
        password: '',
        port: 5432, // Default PostgreSQL port
    });

    try {
        await client.connect();
        console.log('Connected to the database.');

        // Create a table for services
        await client.query(`
            CREATE TABLE IF NOT EXISTS services (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE
            );
        `);
        console.log('Table "services" created.');

        // Create a table for forms with a JSONB column for fields
        await client.query(`
            CREATE TABLE IF NOT EXISTS forms (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                fields JSONB
            );
        `);
        console.log('Table "forms" created.');

        // Create a table for form_services (many-to-many relationship)
        await client.query(`
            CREATE TABLE IF NOT EXISTS form_services (
                form_id INT REFERENCES forms(id) ON DELETE CASCADE,
                service_id INT REFERENCES services(id) ON DELETE CASCADE,
                PRIMARY KEY (form_id, service_id)
            );
        `);
        console.log('Table "form_services" created.');

        // Insert seed data from services.json
        let dbServices = [];
        for (const service of services) {
            const result = await client.query(
                'INSERT INTO services (name) VALUES ($1) RETURNING *',
                [service]
            );
            dbServices.push(result.rows[0]);
        }
        console.log('Seed data from services.json inserted.');

        const formTitleServiceIdMap = dbServices.reduce((acc, service) => {
            const form = forms.find(form => form.services.includes(service.name)) ?? forms.find(form => form.services.includes("*"));
            if (!acc[form.title]) {
                acc[form.title] = [];
            }

            acc[form.title].push(service.id);
            return acc;
        }, {})
        
        // Insert seed data from forms.json
        for (const form of forms) {
            const result = await client.query(
                'INSERT INTO forms (title, fields) VALUES ($1, $2) RETURNING id',
                [form.title, JSON.stringify(form.fields)]
            );
            const formId = result.rows[0].id;

            // Insert seed data for form_services
            for (let i = 0; i < formTitleServiceIdMap[form.title].length; i++) {
                const targetServiceId = formTitleServiceIdMap[form.title][i];
                console.log(targetServiceId)
                await client.query(
                    'INSERT INTO form_services (form_id, service_id) VALUES ($1, $2)',
                    [formId, targetServiceId]
                );
            }
        }
        console.log('Seed data from forms.json inserted.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await client.end();
        console.log('Database connection closed.');
    }
};

seedDatabase();
