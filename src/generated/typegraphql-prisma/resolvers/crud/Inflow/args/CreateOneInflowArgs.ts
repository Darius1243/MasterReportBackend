import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InflowUncheckedCreateInput } from "../../../inputs/InflowUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneInflowArgs {
  @TypeGraphQL.Field(_type => InflowUncheckedCreateInput, {
    nullable: false
  })
  data!: InflowUncheckedCreateInput;
}
