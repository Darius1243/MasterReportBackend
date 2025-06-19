import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateOrConnectWithoutInflowsInput } from "../inputs/PersonCreateOrConnectWithoutInflowsInput";
import { PersonUncheckedCreateWithoutInflowsInput } from "../inputs/PersonUncheckedCreateWithoutInflowsInput";
import { PersonUncheckedUpdateWithoutInflowsInput } from "../inputs/PersonUncheckedUpdateWithoutInflowsInput";
import { PersonUpsertWithoutInflowsInput } from "../inputs/PersonUpsertWithoutInflowsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateOneRequiredWithoutInflowsNestedInput", {})
export class PersonUpdateOneRequiredWithoutInflowsNestedInput {
  @TypeGraphQL.Field(_type => PersonUncheckedCreateWithoutInflowsInput, {
    nullable: true
  })
  create?: PersonUncheckedCreateWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonCreateOrConnectWithoutInflowsInput, {
    nullable: true
  })
  connectOrCreate?: PersonCreateOrConnectWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpsertWithoutInflowsInput, {
    nullable: true
  })
  upsert?: PersonUpsertWithoutInflowsInput | undefined;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PersonUncheckedUpdateWithoutInflowsInput, {
    nullable: true
  })
  update?: PersonUncheckedUpdateWithoutInflowsInput | undefined;
}
