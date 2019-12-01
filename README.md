## GraphGoose

CLI tool for quick starting a GraphQL server with Node, Apollo-Express, Mongoose and MongoDB. 

Usage:

In your terminal navigate to the folder you wish to work in and run: 

### `npx graphgoose`

This will install and run graphgoose for you automatically and ask you to choose your templates. 

The quick start is for simple projects and designed to get you quickly up and running to experiment with GraphQL. The modular start is in beta and built with the intention of giving you a base for starting a GraphQL API for a larger project. 

## Roadmap Items

Note: please do not raise an issue for the following items, if you would like to work on any of them please reach out to rahat on twitter @rahatcodes or by email rahat@rahatcodes.com. 

The following are all items being working on for v1.0.0 (est. release January 2020)

1. Revamp Readme and revamp documentation on how to use graphgoose
2. Implement tests for code
3. Implement full CRUD funcitonality for initial GraphQL schema on both templates
4. For modular template work on optimization (dataloader)

Stretch goals: 
- Implement Jest for testing on modular template
- Consider refactor of the way schema is generated and passed to Apollo Server