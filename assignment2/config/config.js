const config = {
     env: process.env.NODE_ENV || 'development', 
     port: process.env.PORT || 8080,
     jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
     mongoUri: process.env.MONGODB_URI || "mongodb+srv://jamelasanchez26:ZG5sMiyrzg8WtnuT@cluster0.ktsrtd0.mongodb.net/Marketplace?retryWrites=true&w=majority"||
    process.env.MONGO_HOST ||
     'mongodb://' + (process.env.IP || 'localhost') + ':' + 
    (process.env.MONGO_PORT || '27017') +
     '/assignment2' 
     }
     export default config