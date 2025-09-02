import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobUncheckedCreateWithoutOutflowsInput } from "../inputs/JobUncheckedCreateWithoutOutflowsInput";
import { JobUncheckedUpdateWithoutOutflowsInput } from "../inputs/JobUncheckedUpdateWithoutOutflowsInput";
import { JobWhereInput } from "../inputs/JobWhereInput";

@TypeGraphQL.InputType("JobUpsertWithoutOutflowsInput", {})
export class JobUpsertWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => JobUncheckedUpdateWithoutOutflowsInput, {
    nullable: false
  })
  update!: JobUncheckedUpdateWithoutOutflowsInput;

  @TypeGraphQL.Field(_type => JobUncheckedCreateWithoutOutflowsInput, {
    nullable: false
  })
  create!: JobUncheckedCreateWithoutOutflowsInput;

  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  where?: JobWhereInput | undefined;
}
