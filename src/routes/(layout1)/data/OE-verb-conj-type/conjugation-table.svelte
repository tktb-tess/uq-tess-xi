<script lang="ts">
  type Props = {
    /** 00 キャプション \
     * 01 不定詞主格 \
     * 02 不定詞与格 \
     * 03 直説法現在単数1人称 \
     * 04 直説法現在単数2人称 \
     * 05 直説法現在単数3人称 \
     * 06 直説法現在複数 \
     * 07 直説法過去単数1人称 \
     * 08 直説法過去単数2人称 \
     * 09 直説法過去単数3人称 \
     * 10 直説法過去複数 \
     * 11 接続法現在単数 \
     * 12 接続法現在複数 \
     * 13 接続法過去単数 \
     * 14 接続法過去複数 \
     * 15 命令法単数 \
     * 16 命令法複数 \
     * 17 現在分詞 \
     * 18 過去分詞 */
    readonly forms: readonly [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];
  };

  const { forms }: Props = $props();
</script>

<table>
  <caption>{forms[0]}</caption>
  <tbody>
    <tr>
      <th scope="row">不定詞</th>
      <th scope="col">主格</th>
      <th scope="col">与格</th>
    </tr>
    <tr>
      <td></td>
      <td>{forms[1]}</td>
      <td>{forms[2]}</td>
    </tr>
    <tr>
      <th scope="row">直説法</th>
      <th scope="col">現在</th>
      <th scope="col">過去</th>
    </tr>
    <tr>
      <th scope="row">1人称単数</th>
      <td>{forms[3]}</td>
      <td>{forms[7]}</td>
    </tr>
    <tr>
      <th scope="row">2人称単数</th>
      <td>{forms[4]}</td>
      <td>{forms[8]}</td>
    </tr>
    <tr>
      <th scope="row">3人称単数</th>
      <td>{forms[5]}</td>
      <td>{forms[9]}</td>
    </tr>
    <tr>
      <th scope="row">複数</th>
      <td>{forms[6]}</td>
      <td>{forms[10]}</td>
    </tr>
    <tr>
      <th scope="row">接続法</th>
      <th scope="col">現在</th>
      <th scope="col">過去</th>
    </tr>
    <tr>
      <th scope="row">単数</th>
      <td>{forms[11]}</td>
      <td>{forms[13]}</td>
    </tr>
    <tr>
      <th scope="row">複数</th>
      <td>{forms[12]}</td>
      <td>{forms[14]}</td>
    </tr>
    <tr>
      <th scope="colgroup">命令法</th>
    </tr>
    <tr>
      <th scope="row">単数</th>
      <td>{forms[15]}</td>
    </tr>
    <tr>
      <th scope="row">複数</th>
      <td>{forms[16]}</td>
    </tr>
    <tr>
      <th scope="row">分詞</th>
      <th scope="col">現在</th>
      <th scope="col">過去</th>
    </tr>
    <tr>
      <td></td>
      <td>{forms[17]}</td>
      <td>{forms[18]}</td>
    </tr>
  </tbody>
</table>

<style lang="postcss">
  @reference '../../../../app.css';
  @layer components {
    table {
      
    }
  }
</style>
