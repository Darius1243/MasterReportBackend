import prisma from '@config/database'
import {
	DocumentType,
	DocumentTypeCreateInput,
} from '@generated/typegraphql-prisma'
import { DocumentTypeUpdateSimpleInput } from './Inputs/DocumentTypeUpdateSimpleInput'

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
		const { name } = data
		return prisma.documentType.create({
			data: {
				name,
			},
		})
	},

	async updateDocumentType(
		id: number,
		data: DocumentTypeUpdateSimpleInput
	): Promise<DocumentType | null> {
		return prisma.documentType.update({
			where: { id },
			data: {
				name: data.name,
			},
		})
	},

	async deleteDocumentType(id: number): Promise<DocumentType | null> {
		return prisma.documentType.delete({
			where: { id },
		})
	},
}
