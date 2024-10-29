"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../ui/input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
    defaultValue?: string;
    hideOnSearch?: boolean;
}

export const SearchInput = ({defaultValue, hideOnSearch} : Props) => {
    const router = useRouter(); // Para mandar os usuários para outra tela
    const pathName = usePathname(); // O PathName salva em qual "URL" do site o usuário está
    // No SearchInput, ele irá aparecer a direita na página inicial e no meio da tela na tela search
    const [searchInput, setSearchInput] = useState(defaultValue ?? '');

    const handleSearchEnter = () => {
        if(searchInput) {
            router.push('/search?q='+encodeURIComponent(searchInput)); // EncodeURIComponent trata os dados para mandar para a URL
        }
    }

    if(hideOnSearch && pathName === '/search') return null;
    
    return (
        <Input
            placeholder={'Buscar'}
            icon={faMagnifyingGlass}
            filled
            value={searchInput}
            onChange={t => setSearchInput(t)}
            onEnter={handleSearchEnter}
        />
    );
}