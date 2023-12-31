// __tests__/api.test.js

import { ApolloServer, gql } from "apollo-server-express";

import {resolvers} from "../grapghql/resolvers";
import {typeDefs} from '../grapghql/typedefs'



const testServer = new ApolloServer({ typeDefs, resolvers });


describe("GraphQL API tests", () => {
  it("should return a visitors", async () => {
    const query = `
      query {
        visitorquery {
          totalLeadsGenerated
          totalVisitors
          year
        }
      }
    `;
    const response = await testServer.executeOperation({
        query: query,
      });

    expect(response.data).toHaveProperty("visitorquery");
    expect(response.body.data.visitorquery[0]).to.have.property('totalLeadsGenerated');
    expect(response.body.data.visitorquery[0]).to.have.property('totalVisitors');
    expect(response.body.data.visitorquery[0]).to.have.property('year'); 
   });

   it("should return sales data", async () => {
    const query = `
      query {
        salesquery {
          _id
          yearlySalesTotal
          yearlyTotalSoldUnits
          year
          targetSales
        }
      }
    `;
    const response = await testServer.executeOperation({
        query: query,
      });

      expect(response.body.data).to.have.property('salesquery');
      expect(response.body.data.salesquery[0]).to.have.property('yearlySalesTotal');
      expect(response.body.data.salesquery[0]).to.have.property('yearlyTotalSoldUnits');
      expect(response.body.data.salesquery[0]).to.have.property('year');
      expect(response.body.data.salesquery[0]).to.have.property('targetSales');
   });
});

