export const port: number = parseInt(process.env.PORT || '3000', 10);
export const mongoUrl: string = process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017/core?authSource=admin';