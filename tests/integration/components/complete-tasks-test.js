import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('complete-tasks', 'Integration | Component | complete tasks', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{complete-tasks}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#complete-tasks}}
      template block text
    {{/complete-tasks}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
