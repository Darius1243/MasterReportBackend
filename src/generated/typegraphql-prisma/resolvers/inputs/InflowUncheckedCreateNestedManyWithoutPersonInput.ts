import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateManyPersonInputEnvelope } from "../inputs/InflowCreateManyPersonInputEnvelope";
import { InflowCreateOrConnectWithoutPersonInput } from "../inputs/InflowCreateOrConnectWithoutPersonInput";
import { InflowCreateWithoutPersonInput } from "../inputs/InflowCreateWithoutPersonInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUncheckedCreateNestedManyWithoutPersonInput", {})
export class InflowUncheckedCreateNestedManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [InflowCreateWithoutPersonInput], {
    nullable: true
  })
  create?: InflowCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: InflowCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => InflowCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: InflowCreateManyPersonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InflowWhereUniqueInput], {
    nullable: true
  })
  connect?: InflowWhereUniqueInput[] | undefined;
}
