import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma";
import { DecimalJSScalar } from "../../scalars";
import { DocumentTypeAvgAggregate } from "../outputs/DocumentTypeAvgAggregate";
import { DocumentTypeCountAggregate } from "../outputs/DocumentTypeCountAggregate";
import { DocumentTypeMaxAggregate } from "../outputs/DocumentTypeMaxAggregate";
import { DocumentTypeMinAggregate } from "../outputs/DocumentTypeMinAggregate";
import { DocumentTypeSumAggregate } from "../outputs/DocumentTypeSumAggregate";

@TypeGraphQL.ObjectType("DocumentTypeGroupBy", {})
export class DocumentTypeGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => DocumentTypeCountAggregate, {
    nullable: true
  })
  _count!: DocumentTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTypeAvgAggregate, {
    nullable: true
  })
  _avg!: DocumentTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTypeSumAggregate, {
    nullable: true
  })
  _sum!: DocumentTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTypeMinAggregate, {
    nullable: true
  })
  _min!: DocumentTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => DocumentTypeMaxAggregate, {
    nullable: true
  })
  _max!: DocumentTypeMaxAggregate | null;
}
