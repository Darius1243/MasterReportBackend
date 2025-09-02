import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { JobUncheckedUpdateWithoutOutflowsInput } from "../inputs/JobUncheckedUpdateWithoutOutflowsInput";
import { JobWhereInput } from "../inputs/JobWhereInput";

@TypeGraphQL.InputType("JobUpdateToOneWithWhereWithoutOutflowsInput", {})
export class JobUpdateToOneWithWhereWithoutOutflowsInput {
  @TypeGraphQL.Field(_type => JobWhereInput, {
    nullable: true
  })
  where?: JobWhereInput | undefined;

  @TypeGraphQL.Field(_type => JobUncheckedUpdateWithoutOutflowsInput, {
    nullable: false
  })
  data!: JobUncheckedUpdateWithoutOutflowsInput;
}
