import { EnderecosProps } from "./Enderecos";


interface PontoCulturalProps {
    id: string,
    nome: string,
    importancia: string,
    como_preservar: string,
    hora_inicio: string,
    hora_fim: string,
    imagem: string,
    referencia: string,
    status: number,
    Enderecos: EnderecosProps[]
}