import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma";
import { DecimalJSScalar } from "../scalars";
import { Outflow } from "../models/Outflow";
import { DocumentTypeCount } from "../resolvers/outputs/DocumentTypeCount";

@TypeGraphQL.ObjectType("DocumentType", {})
export class DocumentType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  outflows?: Outflow[];

  @TypeGraphQL.Field(_type => DocumentTypeCount, {
    nullable: true
  })
  _count?: DocumentTypeCount | null;
}
