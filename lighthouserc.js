module.exports = {
    ci: {
        collect: {
            startServerCommand: 'yarn start',
            url: ['http://localhost:3000/blog', 'http://localhost:3000/shop'],
            startServerReadyTimeout: 20000,
            numberOfRuns: 3,
        },
        upload: {
            target: 'temporary-public-storage',
        }
    },
};