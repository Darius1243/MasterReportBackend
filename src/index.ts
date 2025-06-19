import 'module-alias/register' // Должен быть первым для регистрации алиасов
import 'reflect-metadata' // Должен быть первым импортом для type-graphql

// После module-alias/register можно использовать алиасы
// Например, если бы server.ts был в src/core/server.ts, можно было бы импортировать так:
// import { createServer } from '@core/server'

import { createServer } from './server'

// Загрузка переменных окружения (если используете dotenv, раскомментируйте)
// import dotenv from 'dotenv';
// dotenv.config();

const PORT = process.env.PORT || '4000'

async function startServer() {
	const { app, httpServer, server } = await createServer()

	// Graceful shutdown
	const signals = ['SIGINT', 'SIGTERM']
	signals.forEach(signal => {
		process.on(signal, async () => {
			console.log(`\nReceived ${signal}, shutting down gracefully...`)
			await server.stop()
			httpServer.close(() => {
				console.log('HTTP server closed.')
				process.exit(0)
			})
		})
	})

	await new Promise<void>(resolve =>
		httpServer.listen({ port: parseInt(PORT) }, resolve)
	)
	console.log(`🚀 Server ready at http://localhost:${PORT}`)
	console.log(
		`🚀 GraphQL endpoint available at http://localhost:${PORT}/graphql`
	)
}

startServer().catch(error => {
	console.error('Failed to start the server:', error)
	process.exit(1)
})
