const a={"figura.docs.text.type":"Typ","figura.docs.text.description":"Opis","figura.docs.text.function":"Funkcja","figura.docs.text.syntax":"Składnia","figura.docs.text.returns":"Zwraca","figura.docs.text.field":"Pole","figura.docs.text.not_editable":"Nie można edytować","figura.docs.text.editable":"Można edytować","figura.docs.text.entries":"Wpisy","figura.docs.text.aliases":"Skróty","figura.docs.text.extends":"rozszerza","figura.docs.enum":"Zawiera wszystkie specyficzne wartości słowne użyte w innych funkcjach","figura.docs.enum.empty":"Nie ma wartości w tym liczniku!","figura.docs.enum.parent_types":`Lista poprawnych "ParentTypes"
Użyte w "ModelParts"`,"figura.docs.enum.render_types":`Lista poprawnych "RenderTypes"
Użyte w "ModelParts"`,"figura.docs.enum.texture_types":`Lista poprawnych "TextureTypes"
Użyte w "ModelParts"`,"figura.docs.enum.entity_poses":`Lista poprawnych "EntityPoses"
Użyte w "EntityAPI"`,"figura.docs.enum.item_display_modes":`Lista poprawnych "DisplayModes"
Użyte w "Item RenderTask"`,"figura.docs.enum.post_effects":`Lista poprawnych "PostEffects"
Użyte w "RendererAPI"`,"figura.docs.enum.loop_modes":`Lista poprawnych "LoopModes"
Użyte w animacjach z Blockbench-a`,"figura.docs.enum.player_model_parts":`Lista poprawnych "PlayerModelParts"
Użyte w "PlayerAPI"`,"figura.docs.enum.use_actions":`Lista poprawnych "UseActions"
Użyte w "ItemStackAPI"`,"figura.docs.globals":"Dokumentacja dla różnych rzeczy dodawanych do globalnego stanu lua przez Figurę","figura.docs.globals.vec":'Skrót dla "vectors.vec"',"figura.docs.globals.list_files":`Funkcja, która zwraca tabelkę z wszystkimy nazwami skryptów z podanej ścieżki
Jeśli żadna ścieżka nie jest podana, to wyszuka w głównym folderze
Drugi argument (boolean) może zostać dodany, aby również wypisać listę plików w podfolderach`,"figura.docs.globals.type":`Figura nadpisuje oryginalną funkcję lua, "type()"
Kiedy użyty z rodzajami Figury, zwraca nazwę tego rodzaju, tak, jak jest to opisane w dokumentacji i w globalnym "figuraMetatables"
Kiedy przywołany na metatabliczkę z rodzajem "__", zwraca odpowiednią wartość`,"figura.docs.enum.keybinds":`Lista poprawnych klawiszy przypisania
Użyte w "KeybindAPI"`,"figura.docs.enum.key_ids":`Lista poprawnych "KeyID"
Użyte w "KeybindAPI"`,"figura.docs.enum.render_modes":`Lista poprawnych "RenderModes"
Użyte podczas wydarzenia "RENDER"`,"figura.docs.globals.require":`Funkcja "require()" bierze nazwę jednego z twoich skryptów, bez rozszerzenia .lua
Jeśli ten skrypt nie był jeszcze wykonywany, to wykona ten skrypt i zwróci wartość, którą ten skrypt zwraca
Jeśli ten skrypt był już wykonany wcześniej, to nie wykona go ponownie, a zamiast tego zwróci poprzednią wartość zwróconą przez ten skrypt
Jeśli wymagany skrypt nie ma żadnego wyjścia, to funkcja "require()" zwróci "true"
Jeśli nazwę, którą wpiszesz do tej funkcji, nie jest powiązana z istniejącym skryptem, to wyjdzie błąd`,"figura.docs":'Komenda "/figura docs" umożliwia ci na dostęp do dokumentacji na temat wszystkiego, co związane z niestandardowymi typami i funkcjami dodawanymi do środowiska skryptowania "Lua" przez Figurę',"figura.docs.enum.play_states":`Lista poprawnych "PlayStates"
Użyte w animacjach z Blockbench-a`,"figura.docs.enum.colors":`Lista niestandardowych kolorów
Użyte wszędzie, gdzie można wstawić wartość heksadecymalną jako kolor`};export{a as default};
