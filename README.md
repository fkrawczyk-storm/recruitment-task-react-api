# Frontend Live Coding Task 🧪

## Cel zadania

Stwórz prostą aplikację wyświetlającą postacie z uniwersum Rick and Morty.

## API

Endpoint: `https://rickandmortyapi.com/api/character`
Dokumentacja (opcjonalnie): [Rick and Morty API Docs](https://rickandmortyapi.com/documentation/#get-all-characters)

## Wymagania (Timebox: 45 min)

### 1. Pobieranie danych

Pobierz listę postaci z podanego endpointu.
_Hint: Interesuje Cię tablica `results` z odpowiedzi API._

### 2. Wyświetlanie (Grid/Flex) zgodne z RWD

Wyświetl postacie w formie siatki (Grid) lub Flex-listy. Każda karta powinna zawierać:

-   Zdjęcie postaci (`image`)
-   Nazwę (`name`)
-   Gatunek (`species`)
-   Status (`status`)

### 3. Detale UI/UX

-   Jeśli status to **Alive**, oznacz go kolorem zielonym. Jeśli **Dead** - czerwonym.
-   Dodaj informację o ładowaniu danych (Loading state).

## Stack techniczny

-   React + TypeScript (jest już skonfigurowany)
-   Stylowanie: Dowolne (CSS, SCSS Modules, StyledComponents - co wolisz).
-   Fetching: Dowolny (`fetch`, `axios` itp.).

## Uruchomienie

1. `npm install`
2. `npm run dev`
