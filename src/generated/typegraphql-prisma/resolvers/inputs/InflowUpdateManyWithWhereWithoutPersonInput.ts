import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowScalarWhereInput } from "../inputs/InflowScalarWhereInput";
import { InflowUncheckedUpdateManyWithoutPersonInput } from "../inputs/InflowUncheckedUpdateManyWithoutPersonInput";

@TypeGraphQL.InputType("InflowUpdateManyWithWhereWithoutPersonInput", {})
export class InflowUpdateManyWithWhereWithoutPersonInput {
  @TypeGraphQL.Field(_type => InflowScalarWhereInput, {
    nullable: false
  })
  where!: InflowScalarWhereInput;

  @TypeGraphQL.Field(_type => InflowUncheckedUpdateManyWithoutPersonInput, {
    nullable: false
  })
  data!: InflowUncheckedUpdateManyWithoutPersonInput;
}
