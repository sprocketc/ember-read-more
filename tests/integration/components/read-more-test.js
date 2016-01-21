import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('read-more', 'Integration | Component | read more', {
  integration: true
});

test('should have correct state classes', function(assert) {
  assert.expect(2);

  this.render(hbs`{{read-more}}`);
  assert.equal(this.$(':first-child').hasClass('is-closed'), true, 'it has label is-closed');

  this.render(hbs`{{read-more isOpen=true}}`);
  assert.equal(this.$(':first-child').hasClass('is-open'), true, 'it has label is-open');
});

test('should toggle link text on click', function(assert) {
  assert.expect(2);

  this.render(hbs`{{read-more}}`);

  // click the toggle link
  this.$('a').click();
  assert.equal(this.$('a').text().trim(), 'Close', 'link text is "Close"');

  // click the toggle link
  this.$('a').click();
  assert.equal(this.$('a').text().trim(), 'Read more', 'link text is "Read more"');
});

test('should trigger onOpen action', function(assert) {
  assert.expect(1);

  // test double for the external action
  this.set('externalAction', () => {
    assert.ok('onOpen triggered');
  });

  this.render(hbs`{{read-more onOpen=(action externalAction)}}`);

  // click the toggle link
  this.$('a').click();
});

test('should trigger onClose action', function(assert) {
  assert.expect(1);

  // test double for the external action
  this.set('externalAction', () => {
    assert.ok('onClose triggered');
  });

  this.render(hbs`{{read-more isOpen=true onClose=(action externalAction)}}`);

  // click the toggle link
  this.$('a').click();
});
