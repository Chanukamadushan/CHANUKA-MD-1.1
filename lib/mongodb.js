const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://pomf2.lain.la/f/vch2ef35.jpg' },
    { key: 'ALIVE_MSG', value: 'Hello , I am alive now!!\n\n_𝐌𝐚𝐝𝐞 𝐛𝐲 𝐂𝐇𝐀𝐍𝐔𝐊𝐀-𝐌𝐃_☠️' },
    { key: 'PREFIX', value: '.' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Timeout වැඩිකිරීම 30 seconds දක්වා
        });
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key }).maxTimeMS(5000); // Query එකට 5 seconds timeout එකක් එකතු කිරීම

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
