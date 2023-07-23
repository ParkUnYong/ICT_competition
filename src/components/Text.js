import Textarea from '@mui/joy/Textarea';

export default function Text() {
  return <div>
  <h4 className='tmi2'>input</h4>
  <hr />
<Textarea
  sx = {{
    width : "512px",
    height : "480px"
  }}
  placeholder="Type in here…"
  defaultValue="얼굴의 특징을 적어주세요."
  minRows={200}
  maxRows={4}
/>
</div>
}