describe("API Testing", () => {
  Cypress.config("baseUrl", " https://reqres.in/api");

  it("POST - create", () => {
    const item = {
      name: "NAME",
      job: "JOB"
    };
    cy.request("POST", "/create", item).should((response) => {
      expect(response.status).eq(201)
          expect(response.body.name).eq("NAME")
          const id = (response.body.id)
      console.log("The returned id is " +id );
    });
  });

  it("GET - read", () => {
    let newitem;
  cy.request('GET', '/users/7').then((response) => {
    expect(response).property('status').to.equal(200)
      expect(response.body.data).property('first_name').to.not.be.oneOf([null, ""])
      const firstname = (response.body.data.first_name)
      const lastname = (response.body.data.last_name)
      console.log("The user with ID #7 is " +firstname+ ""+ lastname );
    })
})

it("GET- negative test - read", () => {
  
  const item = {
    name: "SondosAlzain",
    job: "QAEngineer"
  };
  cy.request("POST", "/create", item).should((response) => {
    expect(response.status).eq(201)}).then((response) =>{
      expect(response.body.name).eq("SondosAlzain")
        const id = (response.body.id)
    console.log("The returned id is " +id )
       //2. delete user (DELETE)
       cy.request({
           method: 'DELETE',
           url: 'users/'+id,
           
       }).then((res)=>{
       
           expect(res.status).to.eq(204)
       expect(res.body).eq("")
       })
})
        
})    
  })
