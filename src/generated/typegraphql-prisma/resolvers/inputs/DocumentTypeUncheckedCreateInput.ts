import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowUncheckedCreateNestedManyWithoutDocumentTypeInput } from "../inputs/OutflowUncheckedCreateNestedManyWithoutDocumentTypeInput";

@TypeGraphQL.InputType("DocumentTypeUncheckedCreateInput", {})
export class DocumentTypeUncheckedCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => OutflowUncheckedCreateNestedManyWithoutDocumentTypeInput, {
    nullable: true
  })
  outflows?: OutflowUncheckedCreateNestedManyWithoutDocumentTypeInput | undefined;
}
