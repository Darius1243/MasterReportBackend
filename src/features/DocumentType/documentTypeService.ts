import prisma from '@config/database'
import { Prisma } from '@generated/prisma'
import {
	DocumentType,
	DocumentTypeCreateInput,
	DocumentTypeUpdateInput,
} from '@generated/typegraphql-prisma'

export const documentTypeService = {
	async getAllDocumentTypes(): Promise<DocumentType[]> {
		return prisma.documentType.findMany()
	},

	async getDocumentTypeById(id: number): Promise<DocumentType | null> {
		return prisma.documentType.findUnique({
			where: { id },
		})
	},

	async createDocumentType(
		data: DocumentTypeCreateInput
	): Promise<DocumentType> {
		return prisma.documentType.create({
			data: data,
		})
	},

	async updateDocumentType(
		id: number,
		data: DocumentTypeUpdateInput
	): Promise<DocumentType | null> {
		return prisma.documentType.update({
			where: { id },
			data: data as Prisma.DocumentTypeUpdateInput,
		})
	},

	async deleteDocumentType(id: number): Promise<DocumentType | null> {
		return prisma.documentType.delete({
			where: { id },
		})
	},
}
