import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobUncheckedCreateWithoutInflowsInput } from "../inputs/JobUncheckedCreateWithoutInflowsInput";
import { JobWhereUniqueInput } from "../inputs/JobWhereUniqueInput";

@TypeGraphQL.InputType("JobCreateOrConnectWithoutInflowsInput", {})
export class JobCreateOrConnectWithoutInflowsInput {
  @TypeGraphQL.Field(_type => JobWhereUniqueInput, {
    nullable: false
  })
  where!: JobWhereUniqueInput;

  @TypeGraphQL.Field(_type => JobUncheckedCreateWithoutInflowsInput, {
    nullable: false
  })
  create!: JobUncheckedCreateWithoutInflowsInput;
}
