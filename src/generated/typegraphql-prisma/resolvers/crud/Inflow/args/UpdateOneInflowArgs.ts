import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InflowUncheckedUpdateInput } from "../../../inputs/InflowUncheckedUpdateInput";
import { InflowWhereUniqueInput } from "../../../inputs/InflowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneInflowArgs {
  @TypeGraphQL.Field(_type => InflowUncheckedUpdateInput, {
    nullable: false
  })
  data!: InflowUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => InflowWhereUniqueInput, {
    nullable: false
  })
  where!: InflowWhereUniqueInput;
}
