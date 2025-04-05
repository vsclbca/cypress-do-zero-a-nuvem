const faker = require('faker')

describe('Central de Atendimento ao Cliente TAT', () => {

  const user = {}

  beforeEach(() => {

    cy.visit('src/index.html')
  
    user.firstName = faker.name.firstName()
    user.lastName = faker.name.lastName()
    user.email = faker.internet.email()
    user.desc = faker.random.alphaNumeric()
  
  })

  it('verifica o título da aplicação', () => {

    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')

  })
  it('preenche os campos obrigatórios e envia o formulário', () => {

    cy.clock()
    
    cy.get('input[name="firstName"]')
      .as('firstName')
      .should('be.visible')
      .type('Caranguejo')
      .should('have.value', 'Caranguejo')

    cy.get('input[name="lastName"]')
      .as('lastName')
      .should('be.visible')
      .type('Cowboy')
      .should('have.value', 'Cowboy')

    cy.get('input[type="email"]')
      .as('email') 
      .type('caranguejocowboy@teste.com', {delay: 0})
      .should('have.value', 'caranguejocowboy@teste.com')

    cy.get('textarea[name="open-text-area"]')
      .as('desc')
      .should('be.visible')
      .type('apenas um caranguejo cowboy testando')
      .should('have.value', 'apenas um caranguejo cowboy testando')

    cy.get('button[type=submit]')
      .contains('Enviar')
      .should('be.visible')
      .click()

    cy.get('span[class="success"]')
      .should('be.visible')

    cy.tick(3000)
      
    cy.get('span[class="success"]')
    .should('not.be.visible')  

  })

  it('exibe uma mensagem de erro ao submeter um formulário com um email em formatação inválida', () => {

    cy.clock()

    cy.get('input[name="firstName"]')
      .as('firstName')
      .should('be.visible')
      .type('Caranguejo')
      .should('have.value', 'Caranguejo')

    cy.get('input[name="lastName"]')
      .as('lastName')
      .should('be.visible')
      .type('Cowboy')
      .should('have.value', 'Cowboy')

    cy.get('input[type="email"]')
      .as('email')
      .should('be.visible')
      .type('CARANGUEJOCOWBOY')
      .should('have.value', 'CARANGUEJOCOWBOY')

    cy.get('textarea[name="open-text-area"]')
      .as('desc')
      .should('be.visible')
      .type('apenas um caranguejo cowboy testando')
      .should('have.value', 'apenas um caranguejo cowboy testando')

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.get('span[class="error"]')
      .should('be.visible')

    cy.tick(3000)

    cy.get('span[class="error"]')
    .should('not.be.visible')

  })

  it('validação do campo de telefone', ()=> {

    cy.get('input[id="phone"]')
      .as('telefone')
      .should('be.visible')
      .type('aaaaa')
      .should('not.have.value')


  })

  it('exibe uma mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.clock()
    
    cy.get('input[name="firstName"]')
      .as('firstName')
      .should('be.visible')
      .type('Caranguejo')
      .should('have.value', 'Caranguejo')

    cy.get('input[name="lastName"]')
      .as('lastName')
      .should('be.visible')
      .type('Cowboy')
      .should('have.value', 'Cowboy')

    cy.get('input[type="email"]')
      .as('email')
      .should('be.visible')
      .type('caranguejocowboy@teste.com')
      .should('have.value', 'caranguejocowboy@teste.com')

    cy.get('textarea[name="open-text-area"]')
      .as('desc')
      .should('be.visible')
      .type('apenas um caranguejo cowboy testando')
      .should('have.value', 'apenas um caranguejo cowboy testando')

    cy.get('input[id="phone-checkbox"]')
      .should('be.visible')
      .check()

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.get('span[class="error"]')
      .should('be.visible')

    cy.tick(3000)

    cy.get('span[class="error"]')
    .should('not.be.visible')

  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

    cy.clock()

    cy.get('input[name="firstName"]')
      .as('firstName')
      .should('be.visible')
      .type('Caranguejo')
      .should('have.value', 'Caranguejo')
      .clear()
      .should('not.have.value')

    cy.get('input[name="lastName"]')
      .as('lastName')
      .should('be.visible')
      .type('Cowboy')
      .should('have.value', 'Cowboy')
      .clear()
      .should('not.have.value')

    cy.get('input[type="email"]')
      .as('email')
      .should('be.visible')
      .type('caranguejocowboy@teste.com')
      .should('have.value', 'caranguejocowboy@teste.com')
      .clear()
      .should('not.have.value')

    cy.get('input[id="phone"]')
      .as('telefone')
      .should('be.visible')
      .type('993892513')
      .should('have.value', '993892513')
      .clear()
      .should('not.have.value')

    cy.get('textarea[name="open-text-area"]')
      .as('desc')
      .should('be.visible')
      .type('apenas um caranguejo cowboy testando')
      .should('have.value', 'apenas um caranguejo cowboy testando')
      .clear()
      .should('not.have.value')

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.get('span[class="error"]')
      .should('be.visible')

    cy.tick(3000)

    cy.get('span[class="error"]')
      .should('not.be.visible')

  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios.', () => {

    cy.clock()
    
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.get('span[class="error"]')
      .should('be.visible')

    cy.tick(3000)

    cy.get('span[class="error"]')
      .should('not.be.visible')

  })

  it('envia o formulário com sucesso usando um comando customizado', () => {

    cy.clock()
    
    cy.fillMandatoryFieldsAndSubmit(user)
    cy.get('span[class="success"]')
      .should('be.visible')
    cy.tick(3000)
    cy.get('span[class="success"]')
      .should('not.be.visible')

  })

  it('seleciona um produto (YouTube) por seu texto', () => {

    cy.contains('select[id="product"]', 'YouTube').select('YouTube')
      .should('have.value', 'youtube')

  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {

    cy.contains('select[id="product"]', 'Mentoria').select('mentoria')
      .should('have.value', 'mentoria')

  })

  it('seleciona um produto (Blog) por seu índice', () => {

    cy.contains('select[id="product"]', 'Blog').select(1)
    .should('have.value', 'blog')

  })

  it('marca o tipo de atendimento "Feedback"', () => {

    cy.get('input[value="feedback"][type="radio"]')
      .check()
      .should('be.checked')

  })

  it('marca cada tipo de atendimento', () => {

    cy.get('[type="radio"]')
      .each(TypesOfService => {
        cy.wrap(TypesOfService)
          .check()
          .should('be.checked')
      }) 
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {

    cy.get('#check input[type="checkbox"]')
      .as('checkboxes')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')      
  })

  it('seleciona um arquivo da pasta fixtures', () => {

    cy.get('input[type="file"]')
      .selectFile('./cypress/fixtures/example.json')
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })

  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {

    cy.get('input[type="file"]')
      .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })

  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {

    cy.fixture('example.json', {encoding:null}).as('exampleFile')
    cy.get('input[type="file"]')
    .selectFile('@exampleFile')
    .as('example.txt')
    .then(input => {
      expect(input[0].files[0].name).to.equal('example.json')

    })

  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {

    cy.get('a')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'privacy.html')
  })

  Cypress._.times(4, () => {
  
    it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {

      cy.contains('a', 'Política de Privacidade')
        .invoke('removeAttr', 'target')
        .click()

      cy.contains('h1', 'CAC TAT - Política de Privacidade')
        .should('be.visible')
    })
  })


})

