import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('read-more', 'Integration | Component | read more', {
  integration: true
});

test('should have the correct class when is open', function(assert) {
  assert.expect(2);

  this.render(hbs`{{read-more isOpen=true}}`);
  assert.equal(this.$(':first-child').hasClass('is-open'), true, 'it has class `is-open`');
  assert.equal(this.$(':first-child').hasClass('is-closed'), false, 'it doesn\'t have class `is-open`');
});

test('should have the correct class when is closed', function(assert) {
  assert.expect(2);

  this.render(hbs`{{read-more isOpen=false}}`);
  assert.equal(this.$(':first-child').hasClass('is-open'), false, 'it doesn\'t have class `is-open`');
  assert.equal(this.$(':first-child').hasClass('is-closed'), true, 'it has class `is-open`');
});

test('should toggle `isOpen` property on click', function(assert) {
  assert.expect(2);

  this.set('isOpen', false);

  this.render(hbs`{{read-more isOpen=isOpen}}`);

  // click the toggle link
  this.$('a').click();
  assert.equal(this.get('isOpen'), true, '`isOpen` is `true`');

  // click the toggle link
  this.$('a').click();
  assert.equal(this.get('isOpen'), false, '`isOpen` is `false`');
});

test('should have correct toggle text', function(assert) {
  assert.expect(2);

  this.set('isOpen', false);

  this.render(hbs`{{read-more isOpen=isOpen}}`);

  assert.equal(this.$('a').text().trim(), 'Read more', 'link text is "Read more"');

  this.set('isOpen', true);

  assert.equal(this.$('a').text().trim(), 'Close', 'link text is "Close"');
});

test('should trigger `onOpen` action', function(assert) {
  assert.expect(1);

  // test double for the external action
  this.set('externalAction', () => {
    assert.ok('onOpen triggered');
  });

  this.render(hbs`{{read-more onOpen=(action externalAction)}}`);

  // click the toggle link
  this.$('a').click();
});

test('should trigger `onClose` action', function(assert) {
  assert.expect(1);

  // test double for the external action
  this.set('externalAction', () => {
    assert.ok('onClose triggered');
  });

  this.render(hbs`{{read-more isOpen=true onClose=(action externalAction)}}`);

  // click the toggle link
  this.$('a').click();
});
