import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutOutflowsInput } from "../inputs/PersonCreateOrConnectWithoutOutflowsInput";
import { PersonUncheckedCreateWithoutOutflowsInput } from "../inputs/PersonUncheckedCreateWithoutOutflowsInput";
import { PersonUncheckedUpdateWithoutOutflowsInput } from "../inputs/PersonUncheckedUpdateWithoutOutflowsInput";
import { PersonUpsertWithoutOutflowsInput } from "../inputs/PersonUpsertWithoutOutflowsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateOneRequiredWithoutOutflowsNestedInput", {})
export class PersonUpdateOneRequiredWithoutOutflowsNestedInput {
  @TypeGraphQL.Field(_type => PersonUncheckedCreateWithoutOutflowsInput, {
    nullable: true
  })
  create?: PersonUncheckedCreateWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutOutflowsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutOutflowsInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutOutflowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PersonUncheckedUpdateWithoutOutflowsInput, {
    nullable: true
  })
  update?: PersonUncheckedUpdateWithoutOutflowsInput | undefined;
}
