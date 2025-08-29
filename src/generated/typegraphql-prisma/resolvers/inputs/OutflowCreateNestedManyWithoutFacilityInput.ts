import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { OutflowCreateManyFacilityInputEnvelope } from "../inputs/OutflowCreateManyFacilityInputEnvelope";
import { OutflowCreateOrConnectWithoutFacilityInput } from "../inputs/OutflowCreateOrConnectWithoutFacilityInput";
import { OutflowCreateWithoutFacilityInput } from "../inputs/OutflowCreateWithoutFacilityInput";
import { OutflowWhereUniqueInput } from "../inputs/OutflowWhereUniqueInput";

@TypeGraphQL.InputType("OutflowCreateNestedManyWithoutFacilityInput", {})
export class OutflowCreateNestedManyWithoutFacilityInput {
  @TypeGraphQL.Field(_type => [OutflowCreateWithoutFacilityInput], {
    nullable: true
  })
  create?: OutflowCreateWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => [OutflowCreateOrConnectWithoutFacilityInput], {
    nullable: true
  })
  connectOrCreate?: OutflowCreateOrConnectWithoutFacilityInput[] | undefined;

  @TypeGraphQL.Field(_type => OutflowCreateManyFacilityInputEnvelope, {
    nullable: true
  })
  createMany?: OutflowCreateManyFacilityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OutflowWhereUniqueInput], {
    nullable: true
  })
  connect?: OutflowWhereUniqueInput[] | undefined;
}
