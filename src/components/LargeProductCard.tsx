const LargeProductCard = ({ imageUrl, name, discount }) => {
  return (
    <div class="m-3 bg-zinc-900 rounded-lg w-96 flex">
      
      <div class="p-4 flex flex-col bg-zinc-800 w-full rounded-lg">
        <p class="pb-3 pt-1 text-lg">{name}</p>
        <s class="text-sm text-zinc-500">{discount}</s>
        <p class="font-bold text-lg">{discount}</p>
        <div class="flex flex-row items-center">
          <p class="text-yellow-500 text-sm pr-2">ganhe 120</p>
          <img class="h-4" src="https://gcdnb.pbrd.co/images/Kn8qJxENZLJv.png" alt="moedas" />
        </div>
      </div>

      <div class="h-auto rounded-lg">
        <img
          alt="produto"
          src={imageUrl}
          class="object-fill rounded-r-lg"
        />
      </div>

    </div>
  )
}

export default LargeProductCard