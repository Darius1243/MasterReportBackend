import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { InflowCreateManyJobInputEnvelope } from "../inputs/InflowCreateManyJobInputEnvelope";
import { InflowCreateOrConnectWithoutJobInput } from "../inputs/InflowCreateOrConnectWithoutJobInput";
import { InflowCreateWithoutJobInput } from "../inputs/InflowCreateWithoutJobInput";
import { InflowWhereUniqueInput } from "../inputs/InflowWhereUniqueInput";

@TypeGraphQL.InputType("InflowUncheckedCreateNestedManyWithoutJobInput", {})
export class InflowUncheckedCreateNestedManyWithoutJobInput {
  @TypeGraphQL.Field(_type => [InflowCreateWithoutJobInput], {
    nullable: true
  })
  create?: InflowCreateWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => [InflowCreateOrConnectWithoutJobInput], {
    nullable: true
  })
  connectOrCreate?: InflowCreateOrConnectWithoutJobInput[] | undefined;

  @TypeGraphQL.Field(_type => InflowCreateManyJobInputEnvelope, {
    nullable: true
  })
  createMany?: InflowCreateManyJobInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InflowWhereUniqueInput], {
    nullable: true
  })
  connect?: InflowWhereUniqueInput[] | undefined;
}
