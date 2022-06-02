/* eslint-disable no-undef */
import Validator from '../validator.js';

test('string', () => {
  const v = new Validator();

  const schema = v.string();
  expect(schema.isValid('')).toBe(true);
  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid(undefined)).toBe(true);

  schema.required();
  expect(schema.isValid('what does the fox say')).toBe(true);
  expect(schema.isValid('hexlet')).toBe(true);
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid('')).toBe(false);

  expect(schema.contains('what').isValid('what does the fox say')).toBe(true);
  expect(schema.contains('whatthe').isValid('what does the fox say')).toBe(false);

  expect(schema.isValid('what does the fox say')).toBe(false);
});

test('number', () => {
  const v = new Validator();

  const schema = v.number();
  expect(schema.isValid(null)).toBe(true);

  schema.required();
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid(7)).toBe(true);

  expect(schema.positive().isValid(10)).toBe(true);

  schema.range(-5, 5);
  expect(schema.isValid(-3)).toBe(false);
  expect(schema.isValid(5)).toBe(true);
});

test('array', () => {
  const v = new Validator();

  const schema = v.array();
  expect(schema.isValid(null)).toBe(true);

  schema.required();
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid([])).toBe(true);
  expect(schema.isValid(['hexlet'])).toBe(true);

  schema.sizeof(2);
  expect(schema.isValid(['hexlet'])).toBe(false);
  expect(schema.isValid(['hexlet', 'code-basics'])).toBe(true);
});

test('object', () => {
  const v = new Validator();

  const schema = v.object();
  schema.shape({
    name: v.string().required(),
    age: v.number().positive(),
  });

  expect(schema.isValid({ name: 'kolya', age: 100 })).toBe(true);
  expect(schema.isValid({ name: 'maya', age: null })).toBe(true);
  expect(schema.isValid({ name: '', age: null })).toBe(false);
  expect(schema.isValid({ name: 'ada', age: -5 })).toBe(false);
});

test('new validator 1', () => {
  const v = new Validator();
  const fn = (value, start) => value.startsWith(start);
  v.addValidator('string', 'startWith', fn);
  const schema = v.string().test('startWith', 'H');

  expect(schema.isValid('exlet')).toBe(false);
  expect(schema.isValid('Hexlet')).toBe(true);
});

test('new validator 2', () => {
  const v = new Validator();
  const fn = (value, min) => value >= min;
  v.addValidator('number', 'min', fn);
  const schema = v.number().test('min', 5);

  expect(schema.isValid(4)).toBe(false);
  expect(schema.isValid(6)).toBe(true);
});
