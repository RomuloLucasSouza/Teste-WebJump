/// <reference types="cypress" />
///<reference types="cypress-iframe" />



describe('CENÁRIO DE TESTES 1', ()=>{
    
    
    it('Clicando nos botões One, Two e Four', ()=>{
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/')
        
        cy.get('#panel_body_one > :nth-child(1)')
        cy.get('#btn_one').click();
        cy.get('#panel_body_one > :nth-child(2)')
        cy.get('#btn_two').click();
        cy.get('#panel_body_one > :nth-child(4)')
        cy.get('#btn_link').click();   
    })

    it('Verificando ausência dos botões', ()=>{
        cy.get('#panel_body_one').children().find('#btn_one').should("not.be.visible");
        cy.get('#panel_body_one').children().find('#btn_two').should("not.be.visible");
        cy.get('#panel_body_one').children().find('#btn_link').should("not.be.visible");
                
    })
        
   
})

describe('CENÁRIO DE TESTES 2', ()=>{
    
    
    it('Clicando nos botões One, Two e Four no IFRAME BUTTONS', ()=>{
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/')
        cy.iframe('#iframe_panel_body > iframe').find('#btn_one').click();
        cy.iframe('#iframe_panel_body > iframe').find('#btn_two').click();
        cy.iframe('#iframe_panel_body > iframe').find('#btn_link').click();     
    })

    it('Verificando ausência dos botões', ()=>{
        cy.iframe('#iframe_panel_body > iframe').find('#btn_one').should('not.be.visible');
        cy.iframe('#iframe_panel_body > iframe').find('#btn_two').should('not.be.visible');
        cy.iframe('#iframe_panel_body > iframe').find('#btn_link').should('not.be.visible');
    })
        
   
})

describe('CENÁRIO DE TESTES 3', ()=>{

    it('Preencher campo FirstName', ()=>{
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/')
        cy.get('#first_name').type('Rômulo Lucas Souza')
    })

    it('Clicando no botão One', ()=>{
        cy.get('#panel_body_one > :nth-child(1)')
        cy.get('#btn_one').click();
    })
    it('Clicando no OptionThree', ()=>{
        cy.get('#opt_three').click();
    })
    it('Selecionando ExempleTwo no Selectbox', ()=>{
        cy.get('#select_box')
          .select('ExampleTwo')
    })
    it('Validando Imagem Selenium', ()=>{
          cy.get('#panel_body_three').find('img','alt="selenium"').should('be.visible');       
    })

})
