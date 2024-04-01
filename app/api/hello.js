import  { db } from '@vercel/postgres'
export default async function handler(request, response) {
    const client = await db.connect();
    try {
        const services = ['Aadhar Enrollment', 0, 0];
        await client.sql`INSERT INTO 'Services'("serviceName", "serviceCost", "serviceProfit") VALUES (${services[0]}, ${services[1]}, ${services[2]});`;
    } catch (exception) {
        return response.status(500).json({ exception });
    }
}