import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFromValue(value) {
  PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat(value);

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>{type.title}</h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={onChange(createPatchFromValue(event.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};
