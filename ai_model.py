# Use a pipeline as a high-level helper
from transformers import pipeline

def generate_response(input, model):
    pipe = pipeline(task="text-generation", model=model, max_length=None, max_new_tokens=1000)
    result = pipe(input, num_return_sequences=1)
    return result













# In future we can use tokenizer method if needed
# from transformers import AutoTokenizer, AutoModelForCausalLM
# Load model directly
# model = AutoModelForCausalLM.from_pretrained("gpt2")
# tokenizer = AutoTokenizer.from_pretrained("gpt2")
# inputs = tokenizer(prompt, return_tensors="pt")
# outputs = model(**inputs, labels=inputs["input_ids"])
# loss = outputs.loss
# logits = outputs.logits
# Generate
# generate_ids = model.generate(inputs.input_ids, max_length=30)
# tokenizer.batch_decode(generate_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]