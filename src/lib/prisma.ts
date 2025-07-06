import { PrismaClient } from "../generated/prisma/client"


    // Extend the global object to store the PrismaClient instance
    declare global {
      var prisma: PrismaClient | undefined;
    }

    let prisma: PrismaClient;

    // Check if a PrismaClient instance already exists on the global object
    if (process.env.NODE_ENV === 'production') {
      prisma = new PrismaClient();
    } else {
      // In development, store the instance on the global object to prevent hot-reloading issues
      if (!global.prisma) {
        global.prisma = new PrismaClient();
      }
      prisma = global.prisma;
    }

    console.log("db connnected ...")

    export default prisma;