import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentTypeOrderByWithAggregationInput } from "../../../inputs/DocumentTypeOrderByWithAggregationInput";
import { DocumentTypeScalarWhereWithAggregatesInput } from "../../../inputs/DocumentTypeScalarWhereWithAggregatesInput";
import { DocumentTypeWhereInput } from "../../../inputs/DocumentTypeWhereInput";
import { DocumentTypeScalarFieldEnum } from "../../../../enums/DocumentTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDocumentTypeArgs {
  @TypeGraphQL.Field(_type => DocumentTypeWhereInput, {
    nullable: true
  })
  where?: DocumentTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DocumentTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DocumentTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DocumentTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => DocumentTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DocumentTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
