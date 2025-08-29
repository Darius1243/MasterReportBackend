import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowScalarWhereInput } from "../inputs/OutflowScalarWhereInput";
import { OutflowUncheckedUpdateManyWithoutPersonInput } from "../inputs/OutflowUncheckedUpdateManyWithoutPersonInput";

@TypeGraphQL.InputType("OutflowUpdateManyWithWhereWithoutPersonInput", {})
export class OutflowUpdateManyWithWhereWithoutPersonInput {
  @TypeGraphQL.Field(_type => OutflowScalarWhereInput, {
    nullable: false
  })
  where!: OutflowScalarWhereInput;

  @TypeGraphQL.Field(_type => OutflowUncheckedUpdateManyWithoutPersonInput, {
    nullable: false
  })
  data!: OutflowUncheckedUpdateManyWithoutPersonInput;
}
