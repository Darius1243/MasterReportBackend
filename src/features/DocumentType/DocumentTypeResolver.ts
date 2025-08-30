import {
	DocumentType,
	DocumentTypeCreateInput,
} from '@generated/typegraphql-prisma'
import { handlePrismaError } from '@utils/errors'
import { UserInputError } from 'apollo-server-express'
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { documentTypeService } from './documentTypeService'
import { DocumentTypeUpdateSimpleInput } from './Inputs/DocumentTypeUpdateSimpleInput'

@Resolver(DocumentType)
export class DocumentTypeResolver {
	@Query(() => [DocumentType])
	async documentTypes(): Promise<DocumentType[]> {
		return documentTypeService.getAllDocumentTypes()
	}

	@Query(() => DocumentType, { nullable: true })
	async documentType(
		@Arg('id', () => Int) id: number
	): Promise<DocumentType | null> {
		return documentTypeService.getDocumentTypeById(id)
	}

	@Mutation(() => DocumentType)
	async createDocumentType(
		@Arg('data', () => DocumentTypeCreateInput) data: DocumentTypeCreateInput
	): Promise<DocumentType> {
		try {
			return await documentTypeService.createDocumentType(data)
		} catch (error: any) {
			if (error instanceof UserInputError) {
				throw error
			}
			handlePrismaError(error, 'DocumentType', 'Create')
		}
	}

	@Mutation(() => DocumentType, { nullable: true })
	async updateDocumentType(
		@Arg('id', () => Int) id: number,
		@Arg('data', () => DocumentTypeUpdateSimpleInput)
		data: DocumentTypeUpdateSimpleInput
	): Promise<DocumentType | null> {
		try {
			return await documentTypeService.updateDocumentType(id, data)
		} catch (error: any) {
			if (error instanceof UserInputError) {
				throw error
			}
			handlePrismaError(error, 'DocumentType', 'Update', { entityId: id })
		}
	}

	@Mutation(() => Boolean)
	async deleteDocumentType(@Arg('id', () => Int) id: number): Promise<boolean> {
		try {
			await documentTypeService.deleteDocumentType(id)
			return true
		} catch (error) {
			handlePrismaError(error, 'DocumentType', 'Delete', { entityId: id })
		}
	}
}
