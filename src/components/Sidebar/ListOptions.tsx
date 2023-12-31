import {
  FiUser,
  FiTool,
  FiDollarSign,
} from 'react-icons/fi';
import { RiSeedlingLine, RiSyringeLine } from 'react-icons/ri';
import { GiCow } from 'react-icons/gi';
import { OptionList } from './styles';
// import  Link  from 'next/link';
import { Tooltip } from './Tooltip';
import { Link, useBreakpointValue } from '@chakra-ui/react';

export function ListOptions() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Tooltip label="Meus dados">
          <OptionList >
          <Link href="/home" >
              <FiUser color="white" size={20} />
          </Link>
          </OptionList>
      </Tooltip>
      <Tooltip label="Financeiro" >
        <OptionList >
        <Link href="/financial" >
            <FiDollarSign color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
      <Tooltip label="Pastagem">
        <OptionList >
        <Link href="/" >
            <RiSeedlingLine color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
      {isWideVersion && (
        <Tooltip label="Suplementação">
        <OptionList >
        <Link href="/" >
            <GiCow color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
        )}
      {isWideVersion && (
        <Tooltip label="Vacinação">
        <OptionList >
        <Link href="/" >
            <RiSyringeLine color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
        )}
      {/* <Tooltip label="Vacinação">
        <OptionList >
          <Link>
            <FiShoppingCart color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip> */}
{/* 
      <Tooltip label="Calendario">
        <OptionList >
        <Link href="/">
            <FiCalendar color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip> */}
      {isWideVersion && (
      <Tooltip label="Área do técnico">
        <OptionList >
        <Link href="/" >
            <FiTool color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
      )}

    </>
  );
}
