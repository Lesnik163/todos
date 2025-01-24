describe('App working check', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('input')
      .type('First task')
      .type('{enter}')
      .type('Second task')
      .type('{enter}')
      .type('Third task')
      .type('{enter}');
  });
  it('AddTaskForm works correctly', () => {
    cy.get('input').should('be.visible');
  });
  it('AddTaskForm add new task to top', () => {
    cy.get('[data-test="checkbox:label"]').eq(0).should('be.visible').contains('Third task');
    cy.get('[data-test="checkbox:label"]').eq(2).should('be.visible').contains('First task');
  });
  it('AddTaskForm works by click', () => {
    // проверяем по крайним
    cy.get('[data-test="checkbox:label"]>span').eq(0)
      .should('be.visible').click().should('have.css', 'text-decoration', 'line-through solid rgb(128, 128, 128)');
    cy.get('[data-test="checkbox:label"]>span').eq(2)
      .should('be.visible').should('have.css', 'text-decoration', 'none solid rgb(128, 128, 128)');
    // проверяем по крайним и центральным
    cy.get('[data-test="checkbox:label"]>span').eq(2)
      .should('be.visible').click().should('have.css', 'text-decoration', 'line-through solid rgb(128, 128, 128)');
    cy.get('[data-test="checkbox:label"]>span').eq(1)
      .should('be.visible').should('have.css', 'text-decoration', 'none solid rgb(128, 128, 128)');
  });
  it('AddTaskForm buttons work well', () => {

    cy.get('[data-testid="left"]').should('be.visible').should('have.text', '3 items left'); // счётчик незаконченных дел
    cy.get('[data-testid="done"]').should('not.exist'); // указатель того что незаконченных дел нет
    // Назначаем выполненными две задачи
    cy.get('[data-test="checkbox:label"]').eq(0).should('be.visible').click();
    cy.get('[data-test="checkbox:label"]').eq(2).should('be.visible').click();
    cy.get('[data-testid="left"]').should('be.visible').should('have.text', '1 items left');
    // нажимаем активные - ожидаем только одну невыполненную задачу в списке
    cy.get('button[name="Active"]').click();
    cy.get('[data-test="checkbox:label"]').should('have.length', '1');
    cy.get('[data-testid="left"]').should('be.visible').should('have.text', '1 items left');
    // нажимаем на оставшуюся невыполненную она становится выполненной и исчезает из режима активные - ожидаем отсутсвие списка
    cy.get('[data-test="checkbox:label"]').should('be.visible').click();
    cy.get('[data-test="checkbox:label"]').should('have.length', '0');
    cy.get('[data-testid="done"]').should('be.visible').should('have.text', 'all done');
    // нажимаем все чтобы видеть все - ожидаем появления всех выполненных задач
    cy.get('button[name="All"]').click()
    cy.get('[data-test="checkbox:label"]').should('have.length', '3');
    cy.get('[data-testid="left"]').should('not.exist');
    cy.get('[data-testid="done"]').should('be.visible').should('have.text', 'all done');
    // делаем две невыполненными и нажимаем кн выполненные - ожидаем одну выполненную
    cy.get('[data-test="checkbox:label"]').eq(1).should('be.visible').click();
    cy.get('[data-test="checkbox:label"]').eq(2).should('be.visible').click();
    cy.get('button[name="Completed"]').click();
    cy.get('[data-testid="left"]').should('be.visible').should('have.text', '2 items left');
    cy.get('[data-testid="done"]').should('not.exist');
    cy.get('[data-test="checkbox:label"]').should('have.length', '1');
    // нажимаем удалить выполненные - ожидаем пустой лист
    cy.get('button[name="Clear completed"]').click();
    cy.get('[data-testid="left"]').should('be.visible').should('have.text', '2 items left');
    cy.get('[data-testid="done"]').should('not.exist');
    cy.get('[data-test="checkbox:label"]').should('have.length', '0');
    // нажимаем на кнопку инпута - ожидаем все назначим одну выполненной
    cy.get('[data-testid="toggle"]').click();
    cy.get('[data-test="checkbox:label"]').eq(1).should('be.visible').click();
    cy.get('[data-testid="left"]').should('be.visible').should('have.text', '1 items left');
    cy.get('[data-testid="done"]').should('not.exist');
    cy.get('[data-test="checkbox:label"]').should('have.length', '2');
    // закрываем кнопкой инпута - ожидаем пустой список
    cy.get('[data-testid="toggle"]').click();
    cy.get('[data-test="checkbox:label"]').should('have.length', '0');
    cy.get('[data-testid="left"]').should('be.visible').should('have.text', '1 items left');
    cy.get('[data-testid="done"]').should('not.exist');
    // удаляем выполненную в закрытом состоянии и открываем кнопкой All - ожидаем одну невыполненную задачу
    cy.get('button[name="Clear completed"]').click();
    cy.get('button[name="All"]').click();
    cy.get('[data-test="checkbox:label"]').should('have.length', '1');
    cy.get('[data-testid="left"]').should('be.visible').should('have.text', '1 items left');
    cy.get('[data-testid="done"]').should('not.exist');
    // делаем оставшуюся готовой и удаляем кнопкой Clear completed - ожидаем пустой список
    cy.get('[data-test="checkbox:label"]').click();
    cy.get('button[name="Clear completed"]').click();
    cy.get('[data-test="checkbox:label"]').should('have.length', '0');
    cy.get('[data-testid="left"]').should('not.exist');
    cy.get('[data-testid="done"]').should('have.text', 'all done');
  });
});