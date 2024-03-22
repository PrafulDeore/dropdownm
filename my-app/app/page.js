'use client'
import { SelectBox } from './Component/SelectBox';
import { Icon } from './Component/icon';

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <SelectBox
        id='demo'
        label='year'
        width='203px'
        placeholder='Select Options'
        classname='max-w-[1606px] xsMax:min-w-full mt-[40px]'
        boxStyle='text-[12px]'
        options={[
          { value: 'Selected Option', label: 'Selected Option' },
          { value: 'Default option', label: 'Default option' },
          { value: 'Hovered option', label: 'Hovered option' },
          { value: 'Disabled option', label: 'Disabled option' ,disabled:true},
          { value: 'Icon and text option', label: 'Icon and text option', icon: <Icon /> },
        ]}
      />  

    </main>
  );
}
