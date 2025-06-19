import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import cors from 'cors' // Для обработки CORS, если клиент на другом домене
import express from 'express'
import http from 'http' // Нужен для graceful shutdown
import { createContext } from './graphql/context' // Наш контекст
import { createGraphQLSchema } from './graphql/schema' // Функция для создания схемы

export async function createServer() {
	// Миграции Prisma теперь применяются через CLI (npx prisma migrate dev)
	const app = express()
	const httpServer = http.createServer(app) // Создаем HTTP сервер для Apollo

	// Создаем GraphQL схему с помощью type-graphql
	const schema = await createGraphQLSchema()

	const server = new ApolloServer({
		schema,
		// Можно добавить плагины, например, для graceful shutdown
		// plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	})

	await server.start() // Запускаем Apollo Server

	app.use(express.json()) // Для парсинга JSON тел запросов
	app.use(cors()) // Разрешаем CORS запросы (настройте по необходимости)
	app.use(
		'/graphql',
		expressMiddleware(server, { context: async () => createContext() })
	)

	app.get('/', (req, res) => {
		res.send(
			'Welcome to Express GraphQL TypeScript SQLite App! Visit /graphql for the API.'
		)
	})

	return { app, httpServer, server } // Возвращаем и app, и httpServer, и Apollo server instance
}
