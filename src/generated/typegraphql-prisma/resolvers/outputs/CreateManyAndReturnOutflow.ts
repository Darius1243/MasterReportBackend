import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnOutflowDocumentTypeArgs } from "./args/CreateManyAndReturnOutflowDocumentTypeArgs";
import { DocumentType } from "../../models/DocumentType";
import { Facility } from "../../models/Facility";
import { Person } from "../../models/Person";

@TypeGraphQL.ObjectType("CreateManyAndReturnOutflow", {})
export class CreateManyAndReturnOutflow {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  personId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  facilityId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  documentTypeId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Person, {
    nullable: false
  })
  person!: Person;

  @TypeGraphQL.Field(_type => Facility, {
    nullable: false
  })
  facility!: Facility;

  documentType!: DocumentType | null;

  @TypeGraphQL.Field(_type => DocumentType, {
    name: "documentType",
    nullable: true
  })
  getDocumentType(@TypeGraphQL.Root() root: CreateManyAndReturnOutflow, @TypeGraphQL.Args() args: CreateManyAndReturnOutflowDocumentTypeArgs): DocumentType | null {
    return root.documentType;
  }
}
