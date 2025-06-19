import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonUncheckedUpdateInput } from "../../../inputs/PersonUncheckedUpdateInput";
import { PersonWhereUniqueInput } from "../../../inputs/PersonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePersonArgs {
  @TypeGraphQL.Field(_type => PersonUncheckedUpdateInput, {
    nullable: false
  })
  data!: PersonUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;
}
