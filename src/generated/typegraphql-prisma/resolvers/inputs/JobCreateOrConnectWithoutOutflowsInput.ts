import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobUncheckedCreateWithoutOutflowsInput } from "../inputs/JobUncheckedCreateWithoutOutflowsInput";
import { JobWhereUniqueInput } from "../inputs/JobWhereUniqueInput";

@TypeGraphQL.InputType("JobCreateOrConnectWithoutOutflowsInput", {})
export class JobCreateOrConnectWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: false
  })
  where!: JobWhereUniqueInput;

  @TypeGraphQL.Field(_type => JobUncheckedCreateWithoutOutflowsInput, {
    nullable: false
  })
  create!: JobUncheckedCreateWithoutOutflowsInput;
}
